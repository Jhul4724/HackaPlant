import axios from "axios";
export const getDisease = async (base64) => {
    try {
        const response = await axios.post(
            "https://api.plant.id/v2/health_assessment",
            {
                api_key: "X9kKTRO9pa5KXhqVsuiiuxl0aj7pEfT1tcGV0fPCBO1CTAEQf1",
                modifiers: ["crops_fast"],
                disease_details: [
                    "common_names",
                    "description",
                    "local_name",
                    "treatment",
                ],
                images: [base64],
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getPlant = async (base64) => {
    try {
        const response = await axios.post("https://api.plant.id/v2/identify", {
            api_key: "X9kKTRO9pa5KXhqVsuiiuxl0aj7pEfT1tcGV0fPCBO1CTAEQf1",
            modifiers: ["crops_fast"],
            plant_details: ["common_names", "wiki_description"],
            images: [base64],
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};