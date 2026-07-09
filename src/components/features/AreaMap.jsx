import { Map } from 'lucide-react';

const AreaMap = () => {
  return (
    <div className="glass-panel p-2 md:p-8 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-4 pt-4 md:px-0 md:pt-0">
        <div>
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Map className="text-secondary" />
            Interactive IEP Town Map
          </h3>
          <p className="text-gray-500 mt-1">Explore blocks, amenities, and investment hotspots.</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="w-3 h-3 rounded-full bg-green-500"></span> High Growth
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span> Stable
          </div>
        </div>
      </div>
      
      {/* Map Placeholder Container */}
      <div className="w-full h-[500px] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group">
        <div className="text-center p-6 z-10">
          <Map size={64} className="mx-auto text-gray-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
          <h4 className="text-xl font-bold text-gray-600">Map Dashboard Coming Soon</h4>
          <p className="text-gray-500 max-w-sm mt-2">The interactive SVG map visualizing Blocks A-M and amenities will be rendered here.</p>
        </div>
        
        {/* Abstract shapes to mimic a map layout */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/50 border border-blue-200 rounded-lg"></div>
        <div className="absolute top-20 right-20 w-48 h-64 bg-green-100/50 border border-green-200 rounded-lg"></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-32 bg-green-100/50 border border-green-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default AreaMap;
