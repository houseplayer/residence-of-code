import { DNA } from "react-loader-spinner"

interface Props {
  size?: number
}

const Loader = ({ size = 80 }: Props) => {
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
