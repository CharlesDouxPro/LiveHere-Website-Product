export interface User {
  created_at: string | null
  stu_address: string | null
  stu_date_of_birth: string | null
  stu_email: string | null
  stu_first_name: string | null
  stu_home_coordinator_email: string | null
  stu_last_name: string | null
  stu_nationality_id: number | null
  stu_phone_number: string | null
  stu_picture: string | null
  stu_semester: string | null
  stu_sexe: string | null
  stu_study_level: string | null
  stu_university_id: number | null
  student__region_com_id: number | null
  student__uni_com_id: number | null
  student_id: string | undefined
  user_role: number | null
  countries: { name: string } | null
}

export interface country {
  id: number
  iso2: string
  iso3: string | null
  local_name: string | null
  name: string | null
}

// created_at
// stu_address
// stu_date_of_birth
// stu_email
// stu_first_name
// stu_home_coordinator_email
// stu_last_name
// stu_nationality_id
// stu_phone_
// stu_picture
// stu_semester
// stu_sexe
// stu_study_level
// stu_university_id
// student__region_com_id
// student__uni_com_id
// student_id
// user_role
