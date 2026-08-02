import CountUp from "react-countup";

const StatCard = ({ title, value }) => {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-gray-500">

                {title}

            </h2>

            <h1 className="text-4xl font-bold mt-2">

                <CountUp
                    end={Number(value)}
                    duration={2}
                />

            </h1>

        </div>

    );

};

export default StatCard;