import { Chip } from "react-native-paper"

export function HealthChip({isHealthy}){
    if(isHealthy)
    return (
        <Chip> Status : healthy </Chip>
    )
    else
    return (
        <Chip> Status : unhealthy </Chip>
    )
}