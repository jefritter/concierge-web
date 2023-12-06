import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import dayjs from  'dayjs'

describe('Home', () => {
  let wrapper
  let date

  const mockReservationToday = {
    title: 'Dinner',
    date: null,
    time: '6:00pm',
    groupCount: 4
  }

  const mockReservationTomorrow = {
    title: 'Sport Massage',
    date: null,
    time: '1:00pm',
    groupCount: 1
  }

  /* 
    This will be used for testing after we update Home.vue to get reservations from the API and remove the mock data in that component
    const mockReservationsAll = [
    mockReservationToday,
    mockReservationTomorrow
  ] */

  beforeEach(() => {
    vi.useFakeTimers()
    date = dayjs(new Date(2000, 1, 1, 12))
    vi.setSystemTime(date)

    mockReservationToday.date = date
    mockReservationTomorrow.date = date.add(1, 'day')

    wrapper = shallowMount(Home)
  })

  afterEach(() => {
    vi.useRealTimers()
  })
  // MOUNTED
  it('sets todays date when mounted', () => {
    expect(wrapper.vm.today).toEqual(date)
  })
  it('sets the mock reservation dates when mounted', () => {
    const tomorrow = date.add(1, 'day')
    expect(wrapper.vm.reservations[0].date).toEqual(date)
    expect(wrapper.vm.reservations[1].date).toEqual(tomorrow)
  })
  // COMPUTED
  it('reservationsToday returns an array of todays reservations', () => {
    expect(wrapper.vm.reservationsToday).toEqual([mockReservationToday])
  })
  it('reservationsUpcoming returns an array of upcoming reservations', () => {
    expect(wrapper.vm.reservationsUpcoming).toEqual([mockReservationTomorrow])
  })
  // METHODS
  it('resDetails(res) returns a concatenation of reservation title and time', () => {
    const result = wrapper.vm.resDetails(mockReservationToday)
    expect(result).toEqual('Dinner: 6:00pm ')
  })
  it('groupCountDetails(res) returns count + ppl', () => {
    const result = wrapper.vm.groupCountDetails(4)
    expect(result).toEqual('4 ppl')
  })
})
