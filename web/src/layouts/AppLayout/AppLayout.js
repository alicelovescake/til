import Nav from 'src/components/Nav'

const AppLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        {children}
      </div>
    </>
  )
}

export default AppLayout
