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
    'https://br.indeed.com/jobs?q=programador&l=Brasil',
    'https://www.glassdoor.com.br/Vaga/brazil-developer-vagas-SRCH_IL.0,6_IN39_KO7,16.htm'
  ];

  constructor() {
    this.firecrawl = new FirecrawlApp({ 
      apiKey: 'fc-77fd45e9be7a4b768224943e50a6a735'
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
          extractRules: {
            title: { selector: 'h2.jobTitle', type: 'text' },
            company: { selector: '.companyName', type: 'text' },
            location: { selector: '.companyLocation', type: 'text' },
            salary: { selector: '.salary-snippet', type: 'text' },
            applyUrl: { selector: '.job-link', type: 'href' },
            description: { selector: '.job-snippet', type: 'text' }
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
      throw error; // Propagate error to be handled by the component
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