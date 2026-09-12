export type Profile = { name: string; role: string; tagline: string };
export type Project = { slug: string; title: string; type: string };

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080';

async function request<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${apiUrl}${path}`, { next: { revalidate: 30 } });
    if (!response.ok) return fallback;
    return await response.json() as T;
  } catch {
    return fallback;
  }
}

export function getProfile() {
  return request<Profile>('/api/v1/profile', {
    name: 'INGA', role: 'AI Creative Director', tagline: 'Creative direction, AI visuals and cinematic stories.'
  });
}

export function getProjects() {
  return request<Project[]>('/api/v1/projects', [
    { slug: 'cinematic-automotive', title: 'Cinematic Automotive', type: 'AI Film' },
    { slug: 'editorial-worlds', title: 'Editorial Worlds', type: 'AI Visuals' },
  ]);
}
