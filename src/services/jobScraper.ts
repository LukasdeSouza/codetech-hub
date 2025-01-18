import FirecrawlApp from '@mendable/firecrawl-js';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salaryRange?: string;
  applyUrl: string;
  description: string;
}

class JobScraperService {
  private static instance: JobScraperService;
  private firecrawl: FirecrawlApp;
  private jobSites = [
    'https://www.linkedin.com/jobs/search?keywords=developer&location=Brazil',
    'https://www.glassdoor.com.br/Vaga/brazil-developer-vagas-SRCH_IL.0,6_IN39_KO7,16.htm'
  ];

  constructor() {
    // In a real application, this should be in an environment variable
    this.firecrawl = new FirecrawlApp({ 
      apiKey: 'YOUR_FIRECRAWL_API_KEY'
    });
  }

  public static getInstance(): JobScraperService {
    if (!JobScraperService.instance) {
      JobScraperService.instance = new JobScraperService();
    }
    return JobScraperService.instance;
  }

  async scrapeJobs(): Promise<Job[]> {
    try {
      const jobs: Job[] = [];
      
      for (const site of this.jobSites) {
        const result = await this.firecrawl.crawlUrl(site, {
          limit: 10,
          scrapeOptions: {
            selectors: {
              title: '.job-title',
              company: '.company-name',
              location: '.job-location',
              salary: '.salary-range',
              applyUrl: 'a.job-link',
              description: '.job-description'
            }
          }
        });

        if (result.success) {
          const scrapedJobs = this.parseJobsData(result.data);
          jobs.push(...scrapedJobs);
        }
      }

      return jobs;
    } catch (error) {
      console.error('Error scraping jobs:', error);
      return [];
    }
  }

  private parseJobsData(data: any[]): Job[] {
    return data.map((item: any) => ({
      id: crypto.randomUUID(),
      title: item.title || 'Position Not Specified',
      company: item.company || 'Company Not Specified',
      location: item.location || 'Location Not Specified',
      type: 'Full-time',
      salaryRange: item.salary || '',
      applyUrl: item.applyUrl || '#',
      description: item.description || 'No description available'
    }));
  }
}

export const jobScraper = JobScraperService.getInstance();