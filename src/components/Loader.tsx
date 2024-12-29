import { DNA } from "react-loader-spinner"

const Loader = ({ size = 80 }) => {
  return (
    <div className="flex justify-center">
      <DNA
        visible={true}
        width={size}
        height={size}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}

export default Loader
