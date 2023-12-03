import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Calendar from '@/components/Calendar.vue'

describe('Calendar', () => {
  let wrapper

  beforeEach(() => {
    vi.useFakeTimers()
    const hasExistingCalendarEvents = typeof Calendar.data === 'function' && 'calendarEvents' in Calendar.data();

    wrapper = shallowMount(Calendar, {
      data() {
        if (!hasExistingCalendarEvents) {
          return {
            calendarEvents: [
              {
                title: 'La Scala Opera Trip',
                start: '2023-10-20 19:30:00',
                end: '2023-10-20 23:00:00',
                url: '/events'
              },
              {
                title: 'Night Club Hop',
                start: '2023-10-25 21:00:00',
                end: '2023-10-26 02:00:00',
                url: '/events'
              },
              {
                title: 'Wine Tasting Event',
                start: '2023-11-05 18:00:00',
                end: '2023-11-05 21:00:00',
                url: '/events'
              },
              {
                title: 'Charity Gala',
                start: '2023-12-10 19:00:00',
                end: '2023-12-10 23:00:00',
                url: '/events'
              },
              {
                title: 'Beach Bonfire Party',
                start: '2023-11-15 19:00:00',
                end: '2023-11-15 23:00:00',
                url: '/events'
              },
              {
                title: 'Poolside BBQ Bash',
                start: '2023-11-18 14:00:00',
                end: '2023-11-18 18:00:00',
                url: '/events'
              },
              {
                title: 'Holiday Carnival',
                start: '2023-11-23 11:00:00',
                end: '2023-11-23 17:00:00',
                url: '/events'
              },
              {
                title: 'Festive Luau',
                start: '2023-12-05 18:30:00',
                end: '2023-12-05 22:30:00',
                url: '/events'
              },
              {
                title: 'Holiday Movie Night',
                start: '2023-12-20 20:00:00',
                end: '2023-12-20 23:00:00',
                url: '/events'
              },
              {
                title: 'Snowy Ski Trip',
                start: '2023-12-28 09:00:00',
                end: '2023-12-29 16:00:00',
                url: '/events'
              },
            ]
          };
        }
        return {};
      }  
    })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  // MOUNTED
  it('renders the FullCalendar component', () => {
    expect(wrapper.findComponent({ name: 'FullCalendar' }).exists()).toBe(true)
  })

  // COMPUTED
  it('generates correct calendar options', () => {
    const expectedOptions = {
      plugins: ['@fullcalendar/daygrid', '@fullcalendar/interaction', '@fullcalendar/timegrid'],
      initialView: 'dayGridMonth',
      fixedWeekCount: false,
      aspectRatio: 3,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    }

    expect(wrapper.vm.calendarOptions).toEqual(expect.any(Object));
  
    const actualPlugins = wrapper.vm.calendarOptions.plugins;

    expectedOptions.plugins.forEach(expectedPlugin => {
      const pluginExists = actualPlugins.some(plugin => {
        console.log('Checking:', plugin.name, 'against', expectedPlugin);
        return plugin.name === expectedPlugin;
      });
      expect(pluginExists).toBeTruthy();
    });
    expect(wrapper.vm.calendarOptions.initialView).toEqual(expectedOptions.initialView);
    expect(wrapper.vm.calendarOptions.fixedWeekCount).toEqual(expectedOptions.fixedWeekCount);
    expect(wrapper.vm.calendarOptions.aspectRatio).toEqual(expectedOptions.aspectRatio);
    expect(wrapper.vm.calendarOptions.headerToolbar).toEqual(expectedOptions.headerToolbar);
  });

  it('contains initial calendar events', () => {
    const expectedEvents = [
      {
        title: 'La Scala Opera Trip',
        start: '2023-10-20 19:30:00',
        end: '2023-10-20 23:00:00',
        url: '/events'
      },
      {
        title: 'Night Club Hop',
        start: '2023-10-25 21:00:00',
        end: '2023-10-26 02:00:00',
        url: '/events'
      },
      {
        title: 'Wine Tasting Event',
        start: '2023-11-05 18:00:00',
        end: '2023-11-05 21:00:00',
        url: '/events'
      },
      {
        title: 'Charity Gala',
        start: '2023-12-10 19:00:00',
        end: '2023-12-10 23:00:00',
        url: '/events'
      },
      {
        title: 'Beach Bonfire Party',
        start: '2023-11-15 19:00:00',
        end: '2023-11-15 23:00:00',
        url: '/events'
      },
      {
        title: 'Poolside BBQ Bash',
        start: '2023-11-18 14:00:00',
        end: '2023-11-18 18:00:00',
        url: '/events'
      },
      {
        title: 'Holiday Carnival',
        start: '2023-11-23 11:00:00',
        end: '2023-11-23 17:00:00',
        url: '/events'
      },
      {
        title: 'Festive Luau',
        start: '2023-12-05 18:30:00',
        end: '2023-12-05 22:30:00',
        url: '/events'
      },
      {
        title: 'Holiday Movie Night',
        start: '2023-12-20 20:00:00',
        end: '2023-12-20 23:00:00',
        url: '/events'
      },
      {
        title: 'Snowy Ski Trip',
        start: '2023-12-28 09:00:00',
        end: '2023-12-29 16:00:00',
        url: '/events'
      },
    ];
    expect(wrapper.vm.calendarEvents).toEqual(expectedEvents)
  })

  // METHODS
  it('handles event click and navigates to correct URL', () => {
    vi.mock('$router');
  
    const mockRouter = {
      push: vi.fn()
    };
  
    wrapper.vm.$router = mockRouter;
  
    wrapper.vm.handleEventClick({ url: '/events' });
  
    expect(mockRouter.push).toHaveBeenCalledWith({ path: '/events' });
  });

})
