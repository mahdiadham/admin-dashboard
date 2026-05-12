import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PortfolioCard from "./components/PortfolioCard/PortfolioCard";
import { portfolio } from "../../data/database.json";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
    const { title, description, projects } = portfolio;
    if (!projects?.length) return null;

    return (
        <div className="h-130 rounded-3xl p-6 bg-linear-to-r from-secondary to-tertiary max-2xl:-order-1 flex-3/2 2xl:flex-2/5 3xl:flex-3! overflow-hidden">
            <h4 className="text-xl text-white capitalize font-ubuntuBold">
                {title}
            </h4>
            <span className="capitalize text-slate-500 text-sm font-ubuntuBold mt-2 block">
                {description}
            </span>
            <Swiper
                className="pb-12! mt-6"
                spaceBetween={20}
                slidesPerView={"auto"}
                breakpoints={{
                    640: {
                        slidesPerView: 2.01,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {projects?.map(project =>
                    <SwiperSlide className="w-full! sm:w-[calc(50%-0.75rem)]! md:w-[calc(40%-0.75rem)]! lg:w-[calc(33.2%-0.75rem)]! select-none" key={project?.id}>
                        <PortfolioCard data={project} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default Portfolio;
