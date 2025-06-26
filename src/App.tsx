import React from 'react'
import { Check } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left side - Main content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                资产
                <br />
                <span className="text-white">新标准</span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
                <p className="text-xl text-gray-300 font-medium">
                  活跃在链上，持续积累价值的智能体
                </p>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-8">
              {/* Gas Optimized */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">燃料优化</h3>
                  <p className="text-gray-400 text-lg">节省 80-90% 燃料费用</p>
                </div>
              </div>

              {/* Cross-chain Compatible */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">跨链兼容</h3>
                  <p className="text-gray-400 text-lg">通过Hyperlane集成，实现 100+ 链路线图</p>
                </div>
              </div>

              {/* Merkle Tree Learning Agents */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">默克尔树学习智能体</h3>
                  <p className="text-gray-400 text-lg">所有交互与学习指标都可验证，且永久绑定于智能体资产本身</p>
                </div>
              </div>

              {/* NFT-like Asset Features */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">类 NFT 的资产特性</h3>
                  <p className="text-gray-400 text-lg">可证明的所有权，像代币一样自由交易</p>
                </div>
              </div>

              {/* Unlimited Memory */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">无限记忆，私人定制</h3>
                  <p className="text-gray-400 text-lg">它记住一切，也能随你而变</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Character and CTA */}
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* 3D Character placeholder */}
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700">
                {/* Simple robot/agent representation */}
                <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center relative">
                  {/* Eyes */}
                  <div className="flex space-x-4">
                    <div className="w-4 h-8 bg-cyan-400 rounded-full"></div>
                    <div className="w-4 h-8 bg-cyan-400 rounded-full"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-500 rounded-full opacity-60 animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-700"></div>
            </div>

            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
              加入等候名单
            </button>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-orange-500 rounded-full opacity-40 animate-pulse delay-500"></div>
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-green-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-30 animate-pulse delay-200"></div>
    </div>
  )
}

export default App
