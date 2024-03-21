export interface ArticlesType {
  title: string;
  status: string;
  // sections: any;
  sections: JSX.Element; // JSX.Element là kiểu dữ liệu cho các thành phần React
}
export interface NavBarType {
  onTabChange: (tabName: string) => void;
  activeTab: string;
}
export interface NavItemType {
  title: string;
  status: string;
  onClick: () => void; // onClick là một hàm không có đối số và không trả về giá trị
}
