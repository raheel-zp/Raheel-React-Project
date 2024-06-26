import * as React from 'react';
import {Typography} from "@mui/material";
import {convertNumToTime, formatNumber} from "../utils/globals";
import { useTranslation } from 'react-i18next';
import {tourTypes} from "../utils/language_Utils";


const TourDetailProperties = ({tour}) => {

    const {t} = useTranslation();

    const m = t('details.m_meter');
    const km = t('details.km_kilometer');
    const hm = t('details.hm_hoehenmeter');


    const translateTourType = (type) =>{
        let translatedType = null; 
        tourTypes.map((typ) => {
            type = type.toLowerCase();
            typ = typ.toLowerCase();
            if(type === "bike & hike") type = type.replace(/\s*&\s*/g, "_");
            if(typ === type){ 
                translatedType = t(`filter.${typ}`)
            }
        })

        return translatedType;
    };

    return <>
        {tour && <div className="tour-detail-properties">
            <div className="tour-detail-properties-el">
                <Typography variant={"infoKey"}>{t('main.sportart')} {" "} </Typography>
                <Typography variant={"h5alt"}>{tour && translateTourType(tour.type)}</Typography>
            </div>
            <div className="tour-detail-properties-el">
                <Typography variant={"infoKey"}>{t('main.stop2stop')} {" "}</Typography>
                <Typography
                    variant={"h5alt"}>{(tour?.number_of_days > 1) ? (tour?.number_of_days + " " + t('details.tage')) : convertNumToTime(tour?.total_tour_duration, true)}</Typography>
            </div>
            <div className="tour-detail-properties-el">
                <Typography variant={"infoKey"}>{t('main.distanz')} {" "}</Typography>
                <Typography variant={"h5alt"}>{formatNumber(tour?.distance) + ' ' + km }</Typography>
            </div>
            <div className="tour-detail-properties-el">
                <Typography variant={"infoKey"}> {t('main.maximale_hoehe')} {" "}</Typography>
                <Typography variant={"h5alt"}>{tour?.max_ele ? formatNumber(tour.max_ele) + ' ' + m : "-"}</Typography>
            </div>
            <div className="tour-detail-properties-el">
                <Typography variant={"infoKey"}>{t('main.aufstieg')} {" "}</Typography>
                <Typography variant={"h5alt"}>{formatNumber(tour?.ascent, ' ' + hm)}</Typography>
            </div>
            <div className="tour-detail-properties-el">
                <Typography variant={"infoKey"}>{t('main.abstieg')}{" "}</Typography>
                <Typography variant={"h5alt"}>{formatNumber(tour?.descent, ' ' + hm)}</Typography>
            </div>
        </div>}
    </>;
}

export default TourDetailProperties;
