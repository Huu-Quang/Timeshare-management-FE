import { Pagination } from "antd";

function PaginationCustom({ current, total, pageSize, onChange }) {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
    />
  );
}
export default PaginationCustom;
