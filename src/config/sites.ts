export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  insightonix: {
    slug: 'insightonix',
    domain: 'insightonix.com',
    name: 'Global Insights Journal',
    shortName: 'Insightonix',
    description: 'International Peer-Reviewed Research',
    dbEnvVar: 'DATABASE_URL_INSIGHTONIX',
    smtpUserEnvVar: 'SMTP_USER_INSIGHTONIX',
    smtpPassEnvVar: 'SMTP_PASS_INSIGHTONIX',
    smtpFromEnvVar: 'SMTP_FROM_INSIGHTONIX',
    r2BucketEnvVar: 'R2_BUCKET_INSIGHTONIX',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_INSIGHTONIX',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_INSIGHTONIX',
  },
};

const DEV_SITE_SLUG = 'insightonix';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
