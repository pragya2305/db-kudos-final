<Navbar bg='light' expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href="/">DB Kudos Emoji</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">My Profile</Nav.Link>
              <Nav.Link href="/leaderBoard">LeaderBoard</Nav.Link>
               
            </Nav>

         <Form className="d-flex" style={{marginLeft:'5%', width:'48%'}}>

                     <FormControl
                        type="search"
                        placeholder="Search DB Kudos Emoji"
                        className="mr-2"
                        aria-label="Search"
                        className="input"
                         onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                      }}
                      />
                    </Form>
            <Nav className="ms-auto">
              
              <Nav.Link>My Kudos
                {isAuth ? (<div>:{ getToken().kudos }</div>) : (null)}
                
              </Nav.Link>
              <Nav.Link onClick={handleLogin}><FaShoppingCart size={25}/></Nav.Link>
              {isAuth ?
                (<Nav.Link onClick={handleLogout}>Logout</Nav.Link>) :
                (<Nav.Link href="/login">Login</Nav.Link>)
               }
            </Nav>
          </Navbar.Collapse>
        </Navbar>