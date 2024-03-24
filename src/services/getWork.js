import { Projects } from "../constants/work";
import { supabase } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("Work")
    .select("*")
    .order("displayOrder", { ascending: true });

  if (error) {
    return Projects;
  }
  return data;
}
