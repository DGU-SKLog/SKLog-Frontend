import Extend from 'assets/images/select_items/extend.svg'
import Edit from 'assets/images/select_items/fix.svg'
import Table from 'assets/images/select_items/table.svg'
import Summary from 'assets/images/select_items/summary.svg'
import List from 'assets/images/select_items/list.svg'
import Ask from 'assets/images/ask_icon.svg'
import { createTable } from 'api/createTable'
import { createList } from 'api/createList'
import { createExpansion } from 'api/createExpansion'
import { createSummary } from 'api/createSummary'
import { createEdit } from 'api/createEdit'

export const SelectItemList = [
  { uri: Table, api: createTable },
  { uri: List, api: createList },
  { uri: Extend, api: createExpansion },
  { uri: Summary, api: createSummary },
  { uri: Edit, api: createEdit },
  { uri: Ask, api: null },
]
