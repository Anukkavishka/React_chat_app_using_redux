import { generateUser } from "../../utils/static-data";

export default function user(state = generateUser(), action) {
  return state;
}
