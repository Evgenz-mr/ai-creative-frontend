import { getProfile } from '../lib/api';
import PortfolioClient from './portfolio-client';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const profile = await getProfile();
  return <PortfolioClient profile={profile} />;
}
