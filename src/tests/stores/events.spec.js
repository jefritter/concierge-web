import { describe, it, expect, vi } from 'vitest'
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { useEventsStore } from '@/stores/events';

const pinia = createPinia();
const app = createApp();
app.use(pinia);

const store = useEventsStore();
const fakeEvents = [
  {
    id: 1,
    title: 'La Scala Opera Trip',
    capacity: 40,
    contact_name: 'Andy Cohen',
    contact_email: 'andy1@mail.com',
    contact_phone: '555-123-4567',
    event_location: 'Opera House',
    descript: 'An evening at the La Scala Opera House.',
    start_time: '2023-10-20 19:30:00',
    end_time: '2023-10-20 23:00:00',
  },
  {
    id: 2,
    title: 'Night Club Hop',
    capacity: 16,
    contact_name: 'Joe Jackson',
    contact_email: 'joe1@mail.com',
    contact_phone: '555-987-6543',
    event_location: 'Various Nightclubs',
    descript: 'A night of dancing and fun at the hottest nightclubs in town.',
    start_time: '2023-10-25 21:00:00',
    end_time: '2023-10-26 02:00:00',
  },
  {
    id: 3,
    title: 'Wine Tasting Event',
    capacity: 36,
    contact_name: 'Alice Johnson',
    contact_email: 'alice1@mail.com',
    contact_phone: '555-123-7890',
    event_location: 'Vineyard Estates',
    descript: 'Join us for an evening of wine tasting and delicious appetizers.',
    start_time: '2023-11-05 18:00:00',
    end_time: '2023-11-05 21:00:00',
  },
  {
    id: 4,
    title: 'Charity Gala',
    capacity: 156,
    contact_name: 'Michael Smith',
    contact_email: 'michael1@mail.com',
    contact_phone: '888-555-1234',
    event_location: 'Grand Ballroom',
    descript: 'An elegant charity gala to support a good cause with live music and fine dining.',
    start_time: '2023-12-10 19:00:00',
    end_time: '2023-12-10 23:00:00',
  },
  {
    id: 5,
    title: 'Beach Bonfire Party',
    capacity: 40,
    contact_name: 'Emily Davis',
    contact_email: 'emily1@beachmail.com',
    contact_phone: '555-234-5678',
    event_location: 'Golden Beach',
    descript: 'Join us for a night of fun around the bonfire on the beach.',
    start_time: '2023-11-15 19:00:00',
    end_time: '2023-11-15 23:00:00',
  },
  {
    id: 6,
    title: 'Poolside BBQ Bash',
    capacity: 60,
    contact_name: 'David Wilson',
    contact_email: 'david1@resortmail.com',
    contact_phone: '555-345-6789',
    event_location: 'Main Pool',
    descript: 'A BBQ party by the pool with great food and music.',
    start_time: '2023-11-18 14:00:00',
    end_time: '2023-11-18 18:00:00',
  },
  {
    id: 7,
    title: 'Holiday Carnival',
    capacity: 80,
    contact_name: 'Sarah Johnson',
    contact_email: 'sarah1@celebrationmail.com',
    contact_phone: '555-456-7890',
    event_location: 'Resort Grounds',
    descript: 'Get into the holiday spirit with games, rides, and delicious treats.',
    start_time: '2023-11-23 11:00:00',
    end_time: '2023-11-23 17:00:00',
  },
  {
    id: 8,
    title: 'Festive Luau',
    capacity: 50,
    contact_name: 'Michael Smith',
    contact_email: 'michael2@luau.com',
    contact_phone: '888-555-1234',
    event_location: 'Luau Pavilion',
    descript: 'Celebrate the season with a Hawaiian-themed luau featuring traditional dances and cuisine.',
    start_time: '2023-12-05 18:30:00',
    end_time: '2023-12-05 22:30:00',
  },
  {
    id: 9,
    title: 'Holiday Movie Night',
    capacity: 30,
    contact_name: 'Alice Johnson',
    contact_email: 'alice2@holidaycinema.com',
    contact_phone: '555-987-6543',
    event_location: 'Resort Cinema',
    descript: 'Enjoy classic holiday films under the stars with popcorn and hot cocoa.',
    start_time: '2023-12-20 20:00:00',
    end_time: '2023-12-20 23:00:00',
  },
  {
    id: 10,
    title: 'Snowy Ski Trip',
    capacity: 25,
    contact_name: 'John Fritter',
    contact_email: 'john1@snowyski.com',
    contact_phone: '555-234-5678',
    event_location: 'Mountain Lodge',
    descript: 'Hit the slopes and enjoy a snowy adventure with skiing and cozy cabins.',
    start_time: '2023-12-28 09:00:00',
    end_time: '2023-12-29 16:00:00',
  }
];

this.fetch = vi.fn(async (url, options) => {
  if (url === '/api/events/all') {
    return {
      status: 200,
      json: async () => ({ data: fakeEvents }),
    };
  } else if (options.method === 'POST' && url === '/api/events') {
    return {
      status: 201,
      json: async () => ({
        message: 'Event successfully added',
      }),
    };
  } else if (options.method === 'DELETE' && url.includes('/api/events?id=')) {
    return {
      status: 200,
      json: async () => ({
        message: 'Event successfully deleted',
      }),
    };
  }
});

const fetchSpy = vi.spyOn(this, 'fetch');

this.alert = vi.fn();

describe('Events Store', () => {
  it('fetches events', async () => {
    const spy = vi.spyOn(store, 'fetchEvents');
    await store.fetchEvents();
    let events = store.events;

    expect(spy).toHaveBeenCalled();
    expect(events).toEqual( fakeEvents);
  });

  it('adds an event', async () => {
    const spy = vi.spyOn(store, 'addEvent');
    await store.addEvent({ title: 'Test Event' });

    expect(spy).toHaveBeenCalled();
    expect(fetchSpy).toHaveBeenCalledWith('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test Event' }),
    });
  });

  it('deletes an event', async () => {
    const spy = vi.spyOn(store, 'deleteEvent');
    await store.deleteEvent({ id: 1, title: 'Test Event' });

    expect(spy).toHaveBeenCalled();
    expect(fetchSpy).toHaveBeenCalledWith(`/api/events?id=1`,{
      method: 'DELETE' 
    });
  });

  it('retrieves events using getEvents getter', async () => {
    let gottenEvents = await store.getEvents;
    expect(gottenEvents).toEqual(fakeEvents);
  });
});
