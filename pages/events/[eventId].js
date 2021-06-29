import React from "react";
import { Fragment } from "react";
import Head from "next/head";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import Comments from "../../components/input/comments";

export default function EventDetailPage(props) {
  const event = props.selectedEvent;
  if (!event) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content="Find events according to your needs here."
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths(context) {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } })); // paths will an array
  return {
    paths: paths,
    fallback: true,
  };
}
