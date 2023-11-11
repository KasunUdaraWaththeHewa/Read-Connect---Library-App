import React from "react";
import "./bookManagement.css";
import SideBar from "../../../components/SideBar/SideBar";
import Welcome from "../../../components/Welcome/Welcome";
import { Link } from "react-router-dom";
function BookManagement() {
    return (
        <div className="bookManagementContainor">
            <div className="leftBookManagementContainor">
                <SideBar />
            </div>
            <div className="rightBookManagementContainor">
                <Welcome />
                <div className="bookManagementtileContainor">
                    <h6><b>Book Management</b></h6>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainorBook"> <Link to="/bookBorrow" className="link"><img src="https://cdn1.iconfinder.com/data/icons/borrow-book-filled-outline/340/education_book_read_knowledge_library_study_cover-512.png" /><br></br>Borrow Books</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookReturn" className="link"><img src="https://cdn0.iconfinder.com/data/icons/book-store-5/68/41-512.png" /><br></br>Return Books</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookPurchaiseAdd" className="link"><img src="https://cdn1.iconfinder.com/data/icons/sale-closing-techniques/64/guidebook-sale-guide-book-marketing-512.png" /><br></br>Book Purchaising</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookGovernmentGrants" className="link"><img src="https://cdn2.iconfinder.com/data/icons/business-and-finance-59/200/vector_547_18-512.png" /><br></br>Government Grants</Link></div>
                        </div>
                    </div>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookRemoveBooks" className="link"><img src="https://cdn3.iconfinder.com/data/icons/education-volume-4-1/48/154-512.png" /><br></br>Remove Books</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookReplacement" className="link"><img src="https://cdn0.iconfinder.com/data/icons/chemistry-2/65/_Studies-512.png" /><br></br>Book Replacement</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookDonation" className="link"><img src="https://cdn4.iconfinder.com/data/icons/charity-86/512/book_donation-knowledge-donate-help-charity-512.png" /><br></br>Book Donation</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/booksAdd" className="link"><img src="https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-1/24/bxs-book-add-512.png" /><br></br>Add Books</Link></div>
                        </div>
                    </div>
                    <div className="bookManagementTileRow">
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookDamage" className="link"><img src="https://cdn3.iconfinder.com/data/icons/books-outline-4/60/Old-Book-ripped-damaged-broken-512.png" /><br></br>Mark Damages</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookReservation" className="link"><img src="https://cdn4.iconfinder.com/data/icons/hotel-and-restaurant-line-vol-4/52/reserve__reserved__ingots__preserved__book__reservedtable__reservedseat-512.png" /><br></br>Book Reservation</Link></div>
                        </div>
                        <div className="bookManagementTile">
                            <div className="textContainorBook"><Link to="/bookStockTaking" className="link"><img src="https://cdn4.iconfinder.com/data/icons/school-education-58/66/Books_Stocks_1-512.png" /><br></br>Stock Taking</Link></div>
                        </div>
                        <div className="bookManagementTile">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BookManagement;