import CountUp from "react-countup";

import { motion } from "framer-motion";

const KpiCard = ({

    title,

    value,

    icon,

    color,

    subtitle

}) => {

    return (

        <motion.div

            whileHover={{ scale: 1.03 }}

            transition={{ duration: 0.3 }}

            className="bg-[#171717] rounded-xl p-6 shadow-lg border border-gray-800"

        >

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-gray-400 text-sm">

                        {title}

                    </p>

                    <h2 className="text-3xl font-bold text-white mt-3">

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

        </motion.div>

    );

};

export default KpiCard;