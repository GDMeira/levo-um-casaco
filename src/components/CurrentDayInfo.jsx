import DayInfoLayout from "../layouts/DayInfoLayout";

export default function CurrentDayInfo({ weatherInfo }) {

    return (
        <DayInfoLayout weatherInfo={weatherInfo} >
            <span>hoje</span>
        </DayInfoLayout>
    )
}