import { HashLoader } from "react-spinners";

function PreLoader({variant}) {
    const colors = {
      "success": "#198754;",
      "primary":"#0d6efd",
      "warning": "#ffc107",
    };
    return (
      <HashLoader color={colors[variant]} loading size={100} speedMultiplier={1} />
    );
}
export default PreLoader;