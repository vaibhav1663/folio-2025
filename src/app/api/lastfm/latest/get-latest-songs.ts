const CLIENT_ID = 'c011bb532025435093f0ae27f862d9ca';
const CLIENT_SECRET = '254dbe742d054009bba0a6279f501a6f';
const REFRESH_TOKEN = 'AQBjAvUt4d-SkdzRzP7crVPGAgmWGK2S1Arc6qbYlhuD3MIkgon8kxhDBcLJ8llqXHornz-tVTYC6QgXnufF6wVHjkIO3EVU8tXSMLGa5nMPQcjjlohRrNJkOK6rzXuYapw';

interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

interface Track {
  track: {
    external_urls: any;
    name: string;
    artists: { name: string }[];
    album: { name: string; images: { url: string }[] };
  };
  played_at: string;
}

interface RecentlyPlayedResponse {
  items: Track[];
  next: string | null;
  cursors: { after: string };
  limit: number;
}

interface CurrentlyPlayingResponse {
  is_playing: boolean;
  item: {
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
    external_urls: { spotify: string };
  };
  timestamp: number;
}


export async function getLatestSongs(limit = 1): Promise<any []> {
  
    try {
      // Step 1: Get a new access token using the refresh token
      const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: REFRESH_TOKEN,
        }),
      });
  
      if (!tokenResponse.ok) {
        return [];
      }
  
      const { access_token } = (await tokenResponse.json()) as TokenResponse;
  
      // Step 2: Fetch recently played tracks
      const recentlyPlayedResponse = await fetch(
        `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
        }
      );
  
      if (!recentlyPlayedResponse.ok) {
        return [];
      }
  
      const recentlyPlayedData = (await recentlyPlayedResponse.json()) as RecentlyPlayedResponse;
  
      // Step 3: Fetch currently playing track
      const currentlyPlayingResponse = await fetch(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
        }
      );
  
      let currentlyPlayingData: CurrentlyPlayingResponse | null = null;
      if (currentlyPlayingResponse.status !== 204 && currentlyPlayingResponse.status < 400) {
        currentlyPlayingData = (await currentlyPlayingResponse.json()) as CurrentlyPlayingResponse;
      }
      console.log(currentlyPlayingData);
      // Step 4: Transform data into the desired format
      let transformedData = recentlyPlayedData.items.map(item => ({
        title: item.track.name,
        artist: item.track.artists.map(artist => artist.name).join(", "),
        date: new Date(item.played_at).getTime() / 1000, // Convert to Unix timestamp in seconds
        url: item.track.external_urls.spotify,
        cover: item.track.album.images[1]?.url || "",
        playing: currentlyPlayingData?.item.name === item.track.name && currentlyPlayingData.is_playing,
      }));
  
      // Add the currently playing track if it's not in the recently played list
      if (currentlyPlayingData && currentlyPlayingData.is_playing) {
        const playingTrack = {
          title: currentlyPlayingData.item.name,
          artist: currentlyPlayingData.item.artists.map(artist => artist.name).join(", "),
          date: currentlyPlayingData.timestamp / 1000, // Convert to Unix timestamp in seconds
          url: currentlyPlayingData.item.external_urls.spotify,
          cover: currentlyPlayingData.item.album.images[1]?.url || "",
          playing: true,
        };
  
        if (!transformedData.some(track => track.title === playingTrack.title)) {
          transformedData.unshift(playingTrack);
        }
      }
  
      // Ensure the total number of tracks does not exceed the limit
      transformedData = transformedData.slice(0, limit);
  
      return transformedData.length > 0
        ? transformedData
        : [];
  
    } catch (error) {
      console.error('Error fetching recently played tracks:', error);
      return [];
    }
}
