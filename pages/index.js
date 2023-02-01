import Head from 'next/head';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';

function HomePage(props) {
 

  return (
    <div>
      <Head>
        <title>NEXT JS EVENTS</title>
        <meta
        name="description"
        content="find a lot of Great events"
        />

      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps()
{
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate:1800
  }
}

export default HomePage;
