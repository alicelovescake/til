import Nav from 'src/components/Nav'

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-0">
        <Nav />
        {children}
      </div>
    </>
  )
}

export default AppLayout
