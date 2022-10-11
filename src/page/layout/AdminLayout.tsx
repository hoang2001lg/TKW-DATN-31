import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div className=''>
            <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="" className="logo d-flex align-items-center">
                <img src="" alt="" />
                <span className="d-none d-lg-block">GYM T&T</span>
                </a>
                <i className="bi bi-list"></i>
                <i className="bi bi-list toggle-sidebar-btn" />
            </div>{/* End Logo */}
            <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                <button type="submit" title="Search"><i className="bi bi-search" /></button>
                </form>
            </div>{/* End Search Bar */}
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                <li className="nav-item d-block d-lg-none">
                    <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <i className="bi bi-search" />
                    </a>
                </li>{/* End Search Icon*/}
                <li className="nav-item dropdown">
                    <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-bell" />
                    <span className="badge bg-primary badge-number">4</span>
                    </a>{/* End Notification Icon */}
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li className="dropdown-header">
                        You have 4 new notifications
                        <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                        <i className="bi bi-exclamation-circle text-warning" />
                        <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                        </div>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                        <i className="bi bi-x-circle text-danger" />
                        <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                        </div>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                        <i className="bi bi-check-circle text-success" />
                        <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                        </div>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                        <i className="bi bi-info-circle text-primary" />
                        <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                        </div>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                        <a href="#">Show all notifications</a>
                    </li>
                    </ul>{/* End Notification Dropdown Items */}
                </li>{/* End Notification Nav */}
                <li className="nav-item dropdown">
                    <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-chat-left-text" />
                    <span className="badge bg-success badge-number">3</span>
                    </a>{/* End Messages Icon */}
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                    <li className="dropdown-header">
                        You have 3 new messages
                        <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                        <a href="#">
                        <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                        <div>
                            <h4>Maria Hudson</h4>
                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                            <p>4 hrs. ago</p>
                        </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                        <a href="#">
                        <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                        <div>
                            <h4>Anna Nelson</h4>
                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                            <p>6 hrs. ago</p>
                        </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                        <a href="#">
                        <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
                        <div>
                            <h4>David Muldon</h4>
                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                            <p>8 hrs. ago</p>
                        </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                        <a href="#">Show all messages</a>
                    </li>
                    </ul>{/* End Messages Dropdown Items */}
                </li>{/* End Messages Nav */}
                <li className="nav-item dropdown pe-3">
                    <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                    <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                    </a>{/* End Profile Iamge Icon */}
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                        <h6>Kevin Anderson</h6>
                        <span>Web Designer</span>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-person" />
                        <span>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i className="bi bi-gear" />
                        <span>Account Settings</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                        <i className="bi bi-question-circle" />
                        <span>Need Help?</span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right" />
                        <span>Sign Out</span>
                        </a>
                    </li>
                    </ul>
                </li>
                </ul>
            </nav>
            </header>
            <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                <a className="nav-link " href="">
                    <i className="bi bi-grid" />
                    <span>Bảng điều khiển</span>
                </a>
                </li>{/* End Dashboard Nav */}
                <li className="nav-heading">Nhân sự</li>
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-menu-button-wide" /><span>Hội Viên</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Danh sách hội viên</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Hội viên mới</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Components Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-journal-text" /><span>Huấn luyện viên</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Form Elements</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Form Layouts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Form Editors</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Form Validation</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Forms Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-layout-text-window-reverse" /><span>Ngày làm</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="tables-general.html">
                        <i className="bi bi-circle" /><span>General Tables</span>
                    </a>
                    </li>
                    <li>
                    <a href="tables-data.html">
                        <i className="bi bi-circle" /><span>Data Tables</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Tables Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Điểm danh</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="charts-chartjs.html">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="charts-apexcharts.html">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="charts-echarts.html">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-heading">Dịch vụ</li>
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#goitap-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Gói tập</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="goitap-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#dichvu-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Dịch vụ</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="dichvu-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#hoadon-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Hóa đơn</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="hoadon-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#giamgia-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Giảm giá</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="giamgia-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#baiviet-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Bài viết</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="baiviet-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-heading">Tương tác</li>
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#tuongtac-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Feedback</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="tuongtac-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#lienlac-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Liên hệ</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="lienlac-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
                <li className="nav-heading">Tài khoản</li>
                <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#thongtin-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart" /><span>Thông tin</span><i className="bi bi-chevron-down ms-auto" />
                </a>
                <ul id="thongtin-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>Chart.js</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ApexCharts</span>
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <i className="bi bi-circle" /><span>ECharts</span>
                    </a>
                    </li>
                </ul>
                </li>{/* End Charts Nav */}
               <li className="nav-item">
                <a className="nav-link collapsed" href="">
                    <i className="bi bi-box-arrow-in-right" />
                    <span>Đăng xuất</span>
                </a>
                </li>

            </ul>
            </aside>


        </div>
)
  return (
    <div>
        <header>
            Admin
        </header>
        <div className="row">
            <div className="col-2">
                <aside>Sidebar</aside>
            </div>
            <div className="col-10">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
        
    </div>

  )
}

export default AdminLayout