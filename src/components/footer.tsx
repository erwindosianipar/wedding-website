"use client"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="flex place-content-center py-6 px-2">
      <div className="font-serif text-sm text-foreground-500">
        &copy; {year} Hak Cipta Dilindungi oleh Undang-Undang Negara Kesatuan Republik Indonesia.
      </div>
    </footer>
  )
}

export default Footer
