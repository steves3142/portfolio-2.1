import { Experience } from "../typings";

export async function fetchExperiences() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
    );

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    //console.log("fetching", experiences);

    return experiences;
};