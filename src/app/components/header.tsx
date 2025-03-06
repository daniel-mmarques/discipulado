'use client'

import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Calendar, ChartBar, MessageCircle, Plus, Search, Users } from 'lucide-react'

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  icon?: React.ReactNode
  title: string
  children: React.ReactNode
}

const ListItem = React.forwardRef<React.ComponentRef<'a'>, ListItemProps>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="flex items-center space-x-2">
              {icon && <div>{icon}</div>}
              <div>
                <div className="text-base mb-0.5 font-medium leading-none">{title}</div>
                <p className="text-sm font-medium leading-snug text-muted-foreground">{children}</p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'

export function Header() {
  return (
    <header className="flex items-center justify-start p-3 max-w-full shadow-sm">
      <NavigationMenu className="h-10">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center justify-center">Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-2 md:w-[200px] lg:w-[500px] lg:grid-cols-[.80fr_.80fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-sm bg-gradient-to-bl from-green-200/25 to-green-300/50 p-4 no-underline outline-none"
                      href="/"
                    >
                      <Plus className="size-8 text-black" />
                      <div className="text-lg font-medium">Cadastro Novo</div>
                      <p className="text-sm font-medium leading-tight text-muted-foreground">Cadastre uma nova pessoa</p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/dados"
                  title="Dados"
                  icon={<ChartBar className="size-5 mx-1 text-black" />}
                  className="rounded-sm bg-gradient-to-bl from-yellow-200/25 to-yellow-300/50"
                >
                  Grafícos e Relatórios
                </ListItem>
                <ListItem
                  href="/turmas"
                  title="Turmas"
                  icon={<Users className="size-5 mx-1 text-black" />}
                  className="rounded-sm bg-gradient-to-bl from-orange-200/25 to-orange-300/50"
                >
                  Gerencie as Turmas
                </ListItem>
                <ListItem
                  href="/buscar"
                  title="Buscar"
                  icon={<Search className="size-5 mx-1 text-black" />}
                  className="rounded-sm bg-gradient-to-bl from-red-200/25 to-red-300/50"
                >
                  Encontre os dados
                </ListItem>
                <ListItem
                  href="/buscar"
                  title="WhatsApp"
                  icon={<MessageCircle className="size-5 mx-1 text-black" />}
                  className="rounded-sm bg-gradient-to-bl from-blue-200/25 to-blue-300/50"
                >
                  Personalize mensagens
                </ListItem>
                <ListItem
                  href="/buscar"
                  title="Eventos"
                  icon={<Calendar className="size-5 mx-1 text-black" />}
                  className="rounded-sm bg-gradient-to-bl from-purple-200/25 to-purple-300/50"
                >
                  Cadastre eventos
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/settings">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Settings</NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
