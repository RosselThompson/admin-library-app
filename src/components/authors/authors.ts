import { ResourceProps } from "react-admin"
import AuthorsList from "@/components/authors/authorsList"
import AuthorsEdit from "@/components/authors/authorsEdit"
import AuthorsCreate from "@/components/authors/authorsCreate"
import GroupIcon from '@mui/icons-material/Group'

const Authors: ResourceProps =  {
  name: 'authors',
  icon: GroupIcon,
  recordRepresentation: "name",
  list: AuthorsList,
  edit: AuthorsEdit,
  create: AuthorsCreate
}

export default Authors