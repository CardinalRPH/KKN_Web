/* eslint-disable react/prop-types */
const Mid1Component = ({ data, mainData }) => {
    return (
        <div className=" bg-softCream flex text-softBlack2 flex-col md:flex-row justify-center py-5 px-8 min-h-96 font-roboto">
            <div className=" py-2 basis-2/5">
                <p>{data?.title}</p>
                <p>{data?.type}</p>
                <p>{mainData?.group.replace(" <br/> ", " ")}</p>
                <p>{mainData?.university}</p>
                <p>{mainData?.smester}</p>
                <p>{`${mainData?.village}, ${mainData.district}`}</p>
            </div>
            <div className=" py-2 md:px-10 basis-3/5 font-roboto">
                {data?.desc1.map((item, index) => (
                    <p className="py-1" key={index}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Mid1Component