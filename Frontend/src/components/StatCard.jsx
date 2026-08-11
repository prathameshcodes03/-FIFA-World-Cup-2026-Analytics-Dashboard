import CountUp from "react-countup";

const StatCard = ({ title, value }) => {

    return (

        <article className="min-w-0 rounded-xl bg-white p-4 text-slate-900 shadow-lg sm:p-6">

            <h2 className="text-gray-500">

                {title}

            </h2>

            <h2 className="mt-2 break-words text-3xl font-bold sm:text-4xl">

                <CountUp
                    end={Number(value)}
                    duration={2}
                />

            </h2>

        </article>

    );

};

export default StatCard;
