import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_territory-availability'

insert({
  table: 'app_public.acquisition_offerings',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'acquisition_option',
      value: 'FREE',
    },
    {
      column: 'terr_avail_id',
      value: uuid(i + 1),
    },
  ]),
})
