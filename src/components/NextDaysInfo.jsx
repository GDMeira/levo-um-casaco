import DayInfoLayout from "../layouts/DayInfoLayout";

export default function NextDaysInfo({weatherInfo}) {

    return (
        <DayInfoLayout weatherInfo={weatherInfo} >
            <span>próximos dias</span>
        </DayInfoLayout>
    )
}