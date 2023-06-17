import { ResourceProps } from "react-admin"
import AuthorsList from "@/components/authors/authorsList"

const Authors: ResourceProps =  {
  name: 'authors',
  list: AuthorsList,
  recordRepresentation: "name"
}

export default Authors