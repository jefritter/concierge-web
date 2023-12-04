import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Events from '@/components/services/Events.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

const pinia = createPinia();

const app = createApp();
app.use(pinia);

let wrapper;

vi.mock('@/stores/events.js', async (importOriginal) => {
  const originalModule = await importOriginal();
  return {
    ...originalModule,
    useEventsStore: () => ({
      ...originalModule.useEventsStore(),
      fetchEvents: vi.fn(async () => {
        const fakeEvents =  [
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
          },
        ];
        originalModule.useEventsStore().events = fakeEvents;
        return fakeEvents; 
      }),
    }),
  };
});

beforeEach(async () => {
  vi.clearAllMocks();
  pinia.state.value = {};
  wrapper = mount(Events, {
    global: {
      plugins: [pinia],
      stubs: {
        NavBar: true
      }
    }
  });
});

afterEach(() => {
  if (wrapper) {
    wrapper.unmount();
  }
});

describe('Events', () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('returns upcoming events', async () => {
    let upcomingEvents = wrapper.vm.upcomingEvents;

    expect(upcomingEvents).toBeInstanceOf(Array);

    expect(upcomingEvents[0].title).toBe('La Scala Opera Trip');
  });

  it('submits a reservation', async () => {
    //since submitReservation currently only logs to the console,
    //that's all this function checks for
    let consoleSpy = vi.spyOn(console, 'log');

    await wrapper.vm.submitReservation({ p: 1 });

    expect(consoleSpy).toHaveBeenCalledWith('submitting');
  });

  it('correctly parses description', () => {
    const fakeEvent = {
      id: 1,
      title: 'Test Event',
      descript: 'This is a long description that needs to be truncated.',
    };
    const truncatedDescription = wrapper.vm.parseDescription(fakeEvent.descript);

    expect(truncatedDescription).toBe('This is a long...');
  });

  it('correctly computes eventOptions', async () => {
    const eventOptions = wrapper.vm.eventOptions;

    expect(eventOptions[0]).toEqual({ id: 1, title: 'La Scala Opera Trip' });
    expect(eventOptions[9]).toEqual({ id: 10, title: 'Snowy Ski Trip' });
  });
});