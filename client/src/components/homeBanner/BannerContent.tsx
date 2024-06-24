
import Styles from "./homeBanner.module.css"

export default function BannerContent({ data }) {
    return (
        <div className={Styles.bannerContainer}>
            <div className={Styles.bannerImg} />
            {/* <image src={data?.img} className={Styles.bannerImg} /> */}
            <div className={Styles.bannerContent}>
              <div className={Styles.text1}>{data.desc1}</div>
            </div>

        </div>
    )
}
