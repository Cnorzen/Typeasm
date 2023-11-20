const ProfilePage = () => {
  return (
    <div className="flex items-center h-screen w-ful justify-center">
      <div className="max-w-xs">
        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-lg py-10">
          <div className="photo-wrapper p-2">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src=""
              />
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-400 font-medium leading-8">
              Do Thai Binh
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>Web Developer</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-400 font-semibold">
                    Quê quán
                  </td>
                  <td className="px-2 py-2 text-gray-400">Hà Nam</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-400 font-semibold">
                    Ngôn ngữ đã học:
                  </td>
                  <td className="px-2 py-2 text-gray-400">
                    HTML , CSS, PHP, Java, Framework
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-400 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2 text-gray-400">
                    thaibinh403h@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
