window.addEventListener('DOMContentLoaded',event=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml="<th>Profile</th> <th>Name</th> <th>Gender</th> <th>Department</th>"+
                 "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
    const innerHtml=`${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -3.png"></td>
        <td>KLSA</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Manager</div>
        </td>
        <td>450000</td>
        <td>21 Jan 2022</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector(`#display`).innerHTML=innerHtml;
}