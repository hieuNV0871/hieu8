# HIEU8 - website bán hàng sử dụng MEVN stack
<br>
<b>Cài đặt và chạy chương trình</b>
<br>
> từ thư mục gốc:
<br>
 >> cd server<br>
 >> open terminal<br>
 >> npm install || yarn add<br>
 >> npm start<br>
> từ thư mục gốc:
<br>
 >> cd client<br>
 >> open terminal<br>
 >> npm install || yarn add<br>
 >> npm run dev<br>
> từ thư mục gốc:
<br>
 >> cd adminPanel<br>
 >> open terminal<br>
 >> npm install || yarn add<br>
 >> npm run dev <br>
<b>Chức năng chính</b><br>
<br>
> giao diện khách hàng sử dụng nuxt3, nuxtUI, tailwindcss
<br>
>> authen author với jwt, google login<br>
>> active account với mail service sử dụng nodemailer<br>
>> quản lý trạng thái của giỏ hàng, user sử dụng pinia<br>
>> valid form sử dụng nuxt ui, yup<br>
>> đặt hàng, thanh toán sử dụng vnpay sanbox<br>
>> sử dụng websocket = socketio gửi thông báo đặt hàng<br>
<br>
> giao diện admin sử dụng vite + vue3 compositions api, ant-design vue, chartjs, tailwindcss
<br>
>> quản lý sản phẩm theo SKU<br>
>> quản lý tài khoản, phân quyền<br>
>> quản lý đơn hàng (khách đặt, admin lên đơn tại store)<br>
>> thống kê<br>

