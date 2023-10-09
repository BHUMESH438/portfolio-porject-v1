import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

//initial set up for the data from the cms and get the other api keys from respected content model settings
const client = createClient({
  space: 'shjp4mod7yxx',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_VALUE
});

export const UseFetchProjects = () => {
  const [loading, setloading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getdata = async () => {
    try {
      const res = await client.getEntries({ content_type: 'portfolioProjects' }); //here give the contentid
      const projects = res.items.map(item => {
        const { github, url, title, text, img } = item.fields;
        const image = img?.fields?.file?.url;
        const id = item.sys?.id;
        return { id, image, url, github, title, text };
      });
      setProjects(projects);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return { loading, projects };
};

// pass the content new content created
// const res = client.getEntries({ content_type: 'portfolioProjects' }).then(res => {
//   console.log(res.items);
// });
