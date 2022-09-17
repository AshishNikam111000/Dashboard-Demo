import React, { useRef, useState } from 'react'
import * as Icons from '../../assets/Icons'
import SideBar from '../../components/SideBar'
import NavBar from '../../components/NavBar'

const Student = () => {
    const [studentList, setStudentList] = useState([{
        id: 0,
        name: 'Karthi',
        email: 'karthi@gmmail.com',
        phone: '7305477760',
        enrollNumber: '1235467305477760',
        dateOfAdmission: '2022-09-17'
    }])

    const [listID, setListID] = useState(1);
    const [editIndex, setEditIndex] = useState(null);
    const [formShow, setFormShow] = useState(false);
    const [action, setAction] = useState('add');

    const Name = useRef(null)
    const Email = useRef(null)
    const Phone = useRef(null)
    const EnrollNum = useRef(null)
    const DOA = useRef(null)

    function handleOnEdit(e) {
        setFormShow(true);
        setAction('edit');

        for (let i in studentList) {
            if (studentList[i].id == e.target.id) {
                setEditIndex(i);
                break;
            }
        }
    }

    function handleOnDelete(e) {
        const new_arr = studentList.filter((item) => {
            return item.id != e.target.id;
        })
        setStudentList(new_arr);
    }

    function handleOnAdd() {
        setFormShow(true);
        setAction('add');
    }

    function handleOnSubmit() {
        if (action == 'add') {
            if (Name.current.value && Email.current.value && Phone.current.value && EnrollNum.current.value && DOA.current.value) {
                const temp = {
                    id: listID,
                    name: Name.current.value,
                    email: Email.current.value,
                    phone: Phone.current.value,
                    enrollNumber: EnrollNum.current.value,
                    dateOfAdmission: DOA.current.value
                }
                setStudentList([
                    ...studentList, temp
                ]);
                setFormShow(false);
                setListID(listID + 1);
            }
            else {
                alert("All fields are required !!!");
            }
        }
        else {
            if (Name.current.value && Email.current.value && Phone.current.value && EnrollNum.current.value && DOA.current.value) {
                studentList[editIndex].name = Name.current.value;
                studentList[editIndex].email = Email.current.value;
                studentList[editIndex].phone = Phone.current.value;
                studentList[editIndex].enrollNumber = EnrollNum.current.value;
                studentList[editIndex].dateOfAdmission = DOA.current.value;
                setStudentList([
                    ...studentList
                ]);
                setFormShow(false);
            }
            else {
                alert("All fields are required !!!");
            }
        }

    }

    return (
        <div className='student flex'>

            <>
                <SideBar />
                <div className='flex flex-col w-full'>
                    <NavBar />
                    <div className='flex flex-col w-full p-10'>
                        <div className='flex justify-between items-center border-b pb-2'>
                            <div className='text-xl font-bold'>Students List</div>
                            <div className='flex gap-3 items-center'>
                                <div>
                                    <img src={Icons.filterIcon} alt="Filter" />
                                </div>
                                <div className='text-[white] bg-[#FEAF00] rounded-md p-3 cursor-pointer text-sm font-medium' onClick={handleOnAdd}>
                                    ADD NEW STUDENT
                                </div>
                            </div>
                        </div>
                        <div className='RenderTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Enroll Number</th>
                                        <th>Date of admission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentList.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th>{item.name}</th>
                                                    <th>{item.email}</th>
                                                    <th>{item.phone}</th>
                                                    <th>{item.enrollNumber}</th>
                                                    <th>{item.dateOfAdmission}</th>
                                                    <th>
                                                        <div>
                                                            <img id={item.id} className='cursor-pointer' src={Icons.editIcon} alt="Edit" onClick={handleOnEdit} />
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div>
                                                            <img id={item.id} className='cursor-pointer' src={Icons.deleteIcon} alt="Delete" onClick={handleOnDelete} />
                                                        </div>
                                                    </th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
            {
                formShow ?
                    <div className='absolute w-screen h-screen flex justify-center items-center'>
                        <div className='absolute bg-black opacity-50 w-screen h-screen' onClick={() => setFormShow(false)} />
                        <div className='bg-[#D9D9D9] rounded-[10px] p-5 z-10'>
                            <div className='text-[22px] font-semibold text-black'>Add / Edit Student</div>
                            <div className='FormTable'>
                                <table>
                                    <tr>
                                        <td>Name</td>
                                        <td>
                                            <input ref={Name} type="text" name="Name" id="nameID" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>
                                            <input ref={Email} type="text" name="Email" id="emailID" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>
                                            <input ref={Phone} type="number" name="Phone" id="phoneID" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Enroll Number</td>
                                        <td>
                                            <input ref={EnrollNum} type="number" name="Enroll Number" id="enrollNumberID" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Date of admission</td>
                                        <td>
                                            <input ref={DOA} type="date" name="doa" id="doaID" />
                                        </td>
                                    </tr><tr>
                                        <td></td>
                                        <td>
                                            <div className='bg-[#FEAF00] rounded p-2 text-center cursor-pointer' onClick={handleOnSubmit}> Submit </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </div>
    )
}

export default Student