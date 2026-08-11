import CountUp from "react-countup";

import { motion } from "framer-motion";

const MotionCard = motion.div;

const KpiCard = ({

    title,

    value,

    icon,

    color,

    subtitle

}) => {

    return (

        <MotionCard

            whileHover={{ scale: 1.03 }}

            transition={{ duration: 0.3 }}

            className="min-w-0 rounded-xl border border-gray-800 bg-[#171717] p-4 shadow-lg sm:p-6"

        >

            <div className="flex items-center justify-between gap-3">

                <div className="min-w-0">

                    <p className="text-gray-400 text-sm">

                        {title}

                    </p>

                    <h2 className="mt-3 break-words text-2xl font-bold text-white sm:text-3xl">

                        <CountUp

                            end={value}

                            duration={2}

                            separator=","

                        />

                    </h2>

                    <p className="text-gray-500 text-sm mt-2">

                        {subtitle}

                    </p>

                </div>

                <div

                    className={`text-4xl ${color}`}

                >

                    {icon}

                </div>

            </div>

        </MotionCard>

    );

};

export default KpiCard;
