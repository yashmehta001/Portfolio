import { skills } from "../constants/skills";
import { supabase } from "./supabase";

export async function getSkills() {
  const { data, error } = await supabase
    .from("Skills")
    .select("*")
    .order("displayOrder", { ascending: true });

  if (error) {
    return skills;
  }
  return data;
}
